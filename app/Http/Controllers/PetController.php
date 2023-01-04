<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pets = Pet::all();

        return response()->json($pets);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pet = new Pet();
        $pet->name = $request->name;
        $pet->species = $request->species;
        $pet->age = $request->age;
        $pet->weight = $request->weight;
        $pet->save();

        $data = [
            "message" => "Pet created successfully",
            "branch" => $pet,
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function show(Pet $pet)
    {
        return response()->json($pet);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function edit(Pet $pet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pet $pet)
    {
        $pet->name = $request->name;
        $pet->species = $request->species;
        $pet->age = $request->age;
        $pet->weight = $request->weight;
        $pet->save();

        $data = [
            "message" => "Pet updated successfully",
            "branch" => $pet,
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        $pet->delete();

        $data = [
            "message" => "Pet deleted successfully",
            "branch" => $pet,
        ];
    }
}
