<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Project;
use App\Models\ProjectWork;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function index() {
        return Project::with('projectWorks')->where('completed', false)->get();
    }

    public function archive() {
        return Project::with('projectWorks')->where('completed', true)->get();
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'project_name' => 'required|unique:projects|max:50'
        ]);

        return DB::transaction(function() use ($request) {
            $project = new Project();
            $project->project_name = $request->get('project_name');
            $project->is_active = false;
            $project->active_at = null;
            $project->save();

            return Project::all()->sortBy('id');
        });
    }

    public function delete($id) {
        return DB::transaction(function() use ($id) {
            $project = Project::find($id);
            $project->delete();

            return Project::all()->sortBy('id');
        });
    }

    public function update(Request $request, $id) {
        return DB::transaction(function() use ($request, $id) {
            $currentStatus = $request->get('current_status');
            $newStatus = !$currentStatus;

            /** @var Project $project */
            $project = Project::find($id);

            if (!$newStatus) {
                $projectWork = new ProjectWork();
                $projectWork->time_spent_in_seconds = Carbon::now()->diffInSeconds($project->active_at);
                $projectWork->project_id = $project->id;
                $projectWork->save();
            }

            $project->active_at = $newStatus ? Carbon::now() : null ;
            $project->is_active = $newStatus;
            $project->save();

            return Project::all()->sortBy('id');
        });
    }

    public function finishProject($id) {
        return DB::transaction(function() use ($id) {
            $project = Project::find($id);
            $project->completed = true;
            $project->save();
            return Project::all()->sortBy('id');
        });
    }

    public function newInvoice($id) {
        return DB::transaction(function() use ($id) {

            $projectWorks = Project::find($id)->projectWorks()->where('invoice_id', null)->get();
            if ($projectWorks->count() > 0) {
                $invoice = new Invoice();
                $invoice->price_per_hour = 500;
                $invoice->project_id = $id;
                $invoice->save();

                foreach ($projectWorks AS $projectWork) {
                    $projectWork->invoice_id = $invoice->id;
                    $projectWork->save();
                }
            }

            return Project::all()->sortBy('id');
        });
    }
}
