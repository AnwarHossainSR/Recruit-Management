<?php

namespace App\Http\Requests;

use App\Traits\ApiResponseWithHttpSTatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\Response;

class ApplicationRequest extends FormRequest
{
    use ApiResponseWithHttpSTatus;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'cv' => 'required',
            'job_id' => 'required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException($this->apiResponse('validation errors', null, Response::HTTP_UNPROCESSABLE_ENTITY, false, $validator->errors()));
    }
}
