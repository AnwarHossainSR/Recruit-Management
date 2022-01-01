<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MainJobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('main_jobs')->insert([
            'title'=>'SOftware Engineer',
            'slug'=>Str::lower(str_replace('','_',Str::random(15))),
            'count'=>4,
            'company'=>'Bjit',
            'location'=>'Bjit,Dhaka',
            'email'=>'testemail@test.com',
            'tag'=>'Software Engineer',
            'salary'=>36000,
            'close_date'=>'2022-03-03 11:02:45',
            'cat_id'=>'1',
            'icon'=>'http://localhost:8000/files/jobs/default.png',
            'description'=>'Test Description',
            'status'=>'active',
            'type'=>'full time',
            'is_featured'=>true,
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
        DB::table('main_jobs')->insert([
            'title'=>'Graphics Designer',
            'slug'=>Str::lower(str_replace('','_',Str::random(15))),
            'count'=>5,
            'company'=>'Bjit',
            'location'=>'Bjit,Dhaka',
            'email'=>'testemail1@test.com',
            'tag'=>'Developer',
            'salary'=>41000,
            'close_date'=>'2022-05-03 11:02:45',
            'cat_id'=>'2',
            'icon'=>'http://localhost:8000/files/jobs/default2.png',
            'description'=>'Test Description',
            'status'=>'active',
            'type'=>'part time',
            'is_featured'=>true,
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
        DB::table('main_jobs')->insert([
            'title'=>'Java Developer',
            'slug'=>Str::lower(str_replace('','_',Str::random(15))),
            'count'=>5,
            'company'=>'Bjit',
            'location'=>'Bjit,Dhaka',
            'email'=>'testemail2@test.com',
            'tag'=>'Java',
            'salary'=>41000,
            'close_date'=>'2022-05-03 11:02:45',
            'cat_id'=>'2',
            'icon'=>'http://localhost:8000/files/jobs/default1.png',
            'description'=>'Test Description',
            'status'=>'active',
            'type'=>'half time',
            'is_featured'=>true,
            'created_at'=>now(),
            'updated_at'=>now()
        ]);

        \App\Models\MainJob::factory(100)->create();
    }
}
