<?php 
  $userInfo = getInforUser();
?>
<div class="top_nav">
  <div class="nav_menu">
    <div class="nav toggle">
      <a id="menu_toggle"><i class="fa fa-bars"></i></a>
    </div>
    <nav class="nav navbar-nav">
      <ul class=" navbar-right">
      <div class="dropdown" style="float:right;">
        <button class="dropbtn"> 
          @if($userInfo)
              {{ $userInfo->name }}
            @endif
          </button>
          <div class="dropdown-content" style="left:0;">
            <a href="{{ action('ProfileController@index')}}">Profile</a>
            <a href="{{action('AdminController@getLogout')}}"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
          </div>
      </div>
        <!-- <li class="nav-item dropdown" style="padding-left: 15px;">
          <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
            <img src="{{$userInfo->avatar}}" alt="avatar">
           
          </a>
          <div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
            
          </div>
        </li> -->
      </ul>
    </nav>
  </div>
</div>
