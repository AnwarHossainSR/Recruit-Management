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
            'icon'=>$this->faker->randomElement(['http://localhost:8000/files/categories/default.png','http://localhost:8000/files/categories/default1.png','http://localhost:8000/files/categories/default2.png','http://localhost:8000/files/categories/default3.png']),
            'status'=>$this->faker->randomElement(['active','inactive']),
            'job_count'=>$this->faker->numberBetween(0,10),
            'created_at'=>$this->faker->dateTimeThisYear(),
            'updated_at'=>$this->faker->dateTimeThisYear()
        ];
    }
}
