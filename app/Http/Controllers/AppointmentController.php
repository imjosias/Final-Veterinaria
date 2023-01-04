<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('appointments')->get();
        /*  ->select('appointments.id', 'customers.name', 'customers.dui', 'appointments.date_appointment')
            ->join('customers', 'customers.id', '=', 'appointments.customer_id') */

        return response()->json($data);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $appointment = new Appointment();
        $appointment->date_appointment = $request->date_appointment;
        $appointment->branch_id = $request->branch_id;
        $appointment->pet_id = $request->pet_id;
        $appointment->service_id = $request->service_id;
        $appointment->customer_id = $request->customer_id;
        $appointment->save();

        $data = [
            "message" => "Appointment created successfully",
            "appointment" => $appointment,

        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $id)
    {

        $customer = DB::table('appointments')
            ->select('appointments.id', 'customers.name AS customer', 'customers.lastname', 'customers.dui', 'appointments.date_appointment AS date', 'pets.name AS pet', 'pets.species', 'branches.name AS branch')
            ->join('customers', 'customers.id', '=', 'appointments.customer_id')
            ->join('pets', 'pets.id', '=', 'appointments.pet_id')
            ->join('branches', 'branches.id', '=', 'appointments.branch_id')
            ->where("customers.id", '=', $id->id)
            ->get();

        return response()->json($customer);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {


        $appointment->date_appointment = $request->date_appointment;
        $appointment->branch_id = $request->branch_id;
        $appointment->pet_id = $request->pet_id;
        $appointment->service_id = $request->service_id;
        $appointment->customer_id = $request->customer_id;

        $appointment->save();

        $data = [
            "message" => "Appointment updated successfully",
            "appointment" => $appointment
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {


        $appointment->delete();

        $data = [
            "message" => "Appointment deleted successfully",
            "appointment" => $appointment,
        ];

        return response()->json($data);
    }

    /*
    public function customers(Request $request)
    {
        $appointment = Appointment::find($request->appointment_id);
        $customer = $appointment->customer;
        $data = [
            "message" => "Cliente fetch satisfactorio",
            "customer" => $customer
        ];

        return response()->json($data);
    }
 */
    /*   public function attach(Request $request)
    {
        $appointment = Appointment::find($request->appointment_id);
        $appointment->service()->attach($request->service_id);
        $data = [
            "message" => "Customer attached successfully",
            "appointment" => $appointment
        ];

        return response()->json($data);
    } */
}