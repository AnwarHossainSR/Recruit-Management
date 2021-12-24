<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->sentence(2,true),
            'slug'=>$this->faker->unique->slug,
            'icon'=>$this->faker->randomElement(['http://localhost:8000/files/category/default.jpg','http://localhost:8000/files/category/default2.jpg','http://localhost:8000/files/category/default3.jpg','http://localhost:8000/files/category/default4.jpg']),
            'status'=>$this->faker->randomElement(['active','inactive']),
            'job_count'=>$this->faker->numberBetween(0,10),
            'created_at'=>$this->faker->dateTimeThisYear(),
            'updated_at'=>$this->faker->dateTimeThisYear()
        ];
    }
}
