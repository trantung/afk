<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\SchoolBlock;
use App\HocMaiClass;
use App\HocMaiAppVersion;
use App\Livestream;
use App\AnotherVideo;
use App\Teacher;
use App\LivestreamAnotherVideo;
use App\HocMaiHeader;
use App\HocMaiFooter;
use App\BankBranch;
use App\Bank;
use App\HocmaiBank;
use App\HocmaiCod;
use APV\User\Services\UserService;
use App\LivestreamDetail;
use App\RateApp;
use App\Event;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class FrontendController extends Controller
{
    public function index()
    {
        $data = '';
        return view('frontend.index')->with(compact('data'));
    }
    
}
