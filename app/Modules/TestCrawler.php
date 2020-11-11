<?php

namespace App\Modules;

use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class TestCrawler
{
    private $crowl;
    private $retData;

    public function __construct($link)
    {
        $response = Http::get($link);
        $html = $response->body();
        //dd($response->body());
        $this->crowl = new Crawler(null, $link);
        $this->crowl->addHtmlContent($html, 'UTF-8');
        $ret = array();
        $nodeValues = $this->crowl->filter('div.WHE7ib')->each(function (Crawler $node, $i) {
            $name  = $node->filter('div.WsMG1c')->text();
            $owner = $node->filter('a.mnKHRc')->text();
            $img =   $node->filter('span.yNWQ8e img.T75of')->extract(['data-src']);

            $ret = [
                'name' => $name,
                'owner' => $owner,
                'img' => $img[0],
            ];
            return $ret;

        });
/*
        $nodeValues = $tmp->each(function (Crawler $node, $i) {
            $ret = [
                'ref' => $node->extract(['href']),
                'text'=> $node->text()
            ];
            return $ret; });
*/

//        dd($nodeValues);
        $this->retData = $nodeValues;
    }

    public function getData() {
        return $this->retData;
    }

}