<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

abstract class ApiController extends Controller
{
    /**
     * Format response sukses
     */
    public function successResponse($data, $message = "Success", $code = 200): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    /**
     * Format response error
     */
    public function errorResponse($message, $code, $details = null): JsonResponse
    {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'details' => $details,
        ], $code);
    }
}
