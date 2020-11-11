<?php

namespace App\Http\Controllers;

use App\Models\GameData;
use App\Modules\TestCrawler;
use App\Providers\AppServiceProvider;
use Illuminate\Http\Request;

//use Symfony\Component\DomCrawler\Crawler;

class TestController extends Controller
{
    public function index() {
        return view('test');
    }

    public function start() {

       //  $link = 'http://musicforprogramming.net/';
        $link = 'https://play.google.com/store/apps/top/category/GAME';
        $crawl = new TestCrawler($link);

        $fetchData = $crawl->getData();
        foreach ($fetchData as $gameData) {
            $sas = GameData::create($gameData);
        }

        $sas->save();

        return ('sss');
    }
}
