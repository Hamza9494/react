<?php

namespace App\Http\Resources;

use App\Http\Resources\UserResource;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => (new Carbon($this->created_at))->format('y-m-d'),
            'due_date' => (new Carbon($this->due_date))->format('y-m-d'),
            'status' => $this->status,
            'image_path' => $this->image_path,
            'created_by' =>  new UserResource($this->createdBy),
            'updated_by' => new UserResource($this->updatedBy),
            'tasks' => new TaskResource($this->tasks),

        ];
    }
}
