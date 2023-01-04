<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = Customer::all();



        return response()->json($customers);
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
        $customers = new Customer();
        $customers->name = $request->name;
        $customers->dui = $request->dui;
        $customers->birthday = $request->birthday;
        $customers->phone = $request->phone;
        $customers->email = $request->email;
        $customers->save();

        $data = [
            "message" => "Customer created successfully",
            "customer" => $customers,
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {


        return response()->json($customer);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        $customer->name = $request->name;
        $customer->dui = $request->dui;
        $customer->birthday = $request->birthday;
        $customer->phone = $request->phone;
        $customer->email = $request->email;
        $customer->save();

        $data = [
            "message" => "Customer updated successfully",
            "customer" => $customer,
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();

        $data = [
            "message" => "Customer deleted successfully",
            "customer" => $customer,
        ];

        return response()->json($data);
    }
/*
    public function attach(Request $request)
    {
        $customer = Customer::find($request->customer_id);
        $customer->appointment()->attach($request->appointment_id);
        $data = [
            "message" => "Customer attached successfully",
        ];

        return response()->json($data);
    }

    public function detach(Request $request)
    {
        $customer = Customer::find($request->customer_id);
        $customer->appointment()->detach($request->appointment_id);
        $data = [
            "message" => "Cliente detachado correctamente",
            "customer" => $customer
        ];

        return response()->json($data);
    } */
}
