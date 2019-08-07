<?php

namespace App\Http\Controllers;
use App\Mobile;

use Illuminate\Http\Request;

class MobileController extends Controller
{
    public function Index(){
       
        return view('Index');
    }
    public function top_rated(){
        $mobiles=[['name'=>'Samsung S9','body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>'samsung.jpeg' ],
        ['name'=>'Iphone XS Max','body'=>'Iphone XS Max  : The Beauty!!','url'=>'iphone.jpeg' ],
        ['name'=>'Samsung S9','body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>'samsung.jpeg' ],
        ['name'=>'Iphone XS Max','body'=>'Iphone XS Max  : The Beauty!!','url'=>'iphone.jpeg' ],
        ['name'=>'Samsung S9','body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>'samsung.jpeg' ],
       
         

    ];
        return response()->json($mobiles);
    }
    public function recent_launched(){
        $mobiles=[['name'=>'Samsung S9','body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>'samsung.jpeg' ],
        ['name'=>'Iphone XS Max','body'=>'Iphone XS Max  : The Beauty!!','url'=>'iphone.jpeg' ],
        ['name'=>'Samsung S9','body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>'samsung.jpeg' ],
        ['name'=>'Iphone XS Max','body'=>'Iphone XS Max  : The Beauty!!','url'=>'iphone.jpeg' ],
        ['name'=>'Samsung S9','body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>'samsung.jpeg' ]];
        return response()->json($mobiles);
        }
        public function search(Request $request){
            $query=$request->input('query');
            $data=[['body'=>'samsung mobile'],['body'=>'samsung mobile'],
            ['body'=>'samsung mobile'],
            ['body'=>'samsung mobile'],
            ['body'=>'samsung mobile'],
        ];
            return response()->json($data);
        }
        public function by_brand(Request $request){
            $brand=$request->input('brand');
            if($brand=='oneplus'){
                $url=''.$brand.'.jpg';
            }
            else{
                $url=''.$brand.'.jpeg'; 
            }
           
            $mobiles=[['name'=>$brand,'body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>$url],
                    ['name'=>$brand,'body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>$url],
                    ['name'=>$brand,'body'=>'Samsung Galaxy S9 : The Beauty!!','url'=>$url],
                    ];
           
            return response()->json($mobiles);

        }
       

}

