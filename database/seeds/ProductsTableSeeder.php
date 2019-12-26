<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [            
            ['id' => 1, 'title' => 'Project 1', 'description' => 'Description 1', 'price' => 10000],
            ['id' => 2, 'title' => 'Project 2', 'description' => 'Description 2', 'price' => 20000],
            ['id' => 3, 'title' => 'Project 3', 'description' => 'Description 3', 'price' => 30000],
            ['id' => 4, 'title' => 'Project 4', 'description' => 'Description 4', 'price' => 40000],
            ['id' => 5, 'title' => 'Project 5', 'description' => 'Description 5', 'price' => 50000],
            ['id' => 6, 'title' => 'Project 6', 'description' => 'Description 6', 'price' => 60000],
            ['id' => 7, 'title' => 'Project 7', 'description' => 'Description 7', 'price' => 70000],
            ['id' => 8, 'title' => 'Project 8', 'description' => 'Description 8', 'price' => 80000],
            ['id' => 9, 'title' => 'Project 9', 'description' => 'Description 9', 'price' => 90000],
            ['id' => 10, 'title' => 'Project 10', 'description' => 'Description 10', 'price' => 100000],
        ];
    
        foreach ($items as $item) {
            Product::updateOrCreate(['id' => $item['id']], $item);
        }
    }
}
