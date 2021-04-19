<!DOCTYPE html>
<html>

@include('common.header')
<body class="nav-md">
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="clearfix"></div>
          <div class="profile clearfix">
            
            <div class="profile_info">
              <span>Welcome,</span>
              
            </div>
          </div>
          <br />
          <!-- sidebar menu -->
          @include('common.sidebar')
        </div>
      </div>
      <!-- top navigation -->
      @include('common.nav_bar')
      <!-- /top navigation -->
      <!-- page content -->
      <div id="page-wrapper" class="right_col" role="main" style="height:auto">
            @yield('content')
      </div>
        <!-- top tiles -->
        <!-- main -content  -->
    </div>
    <!-- /top tiles -->
    <!-- footer content -->
  </div>
  @include('common.footer')