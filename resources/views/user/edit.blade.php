@extends('common.default')
@section('content')
<div class="col-md-12 col-sm-12  ">
  <div class="x_panel">
    <h2>Sửa người dùng {{ $user->username }}</h2>
    <div class="x_title">
      <a href="{{ action('UserController@index') }}" class="btn btn-danger">Trở lại</a></h2>
      <ul class="nav navbar-right panel_toolbox">
        <li>
          <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <br>
      {{ Form::open(array('method'=>'PUT', 'files'=>true, 'action' => array('UserController@update', $user->id))) }}
      <div class="form-group row">
        <div class="col-md-6 col-sm-6">
          <b>Họ và tên</b>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            {{ Form::text('name', $user->name, array('class' => 'form-control has-feedback-left','placeholder'=>'họ & tên')) }}
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <b>Email Address</b>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope-o"></i></span>
            </div>
            {{ Form::text('email', $user->email, array('class' => 'form-control has-feedback-left','placeholder'=>'email')) }}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-6 col-sm-6">
          <b>Tên đăng nhập</b>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            {{ Form::text('username', $user->username, array('class' => 'form-control has-feedback-left','placeholder'=>'username')) }}
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <b>Mật khẩu</b>
          <br>
          <div class="input-group mb-3">
          {{ Form::password('password', null, array('class' => 'form-control','placeholder'=>'nhập mật khẩu')) }}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-lg-6 col-md-12">
            <label>Quyền</label>
            <div class="multiselect_div">
            {{ Form::select('role_id', getListRole(),$user->role_id, array('class' => 'form-control')) }}
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <label>Ảnh đại diện</label>
            <div class="col-lg-12">
              <input type="file" name="avatar" class="form-control"><br>
              <div class="clearfix row">
                  @if($user->avatar)
                      <img src="{{$user->avatar }}" width="150px" height="auto"  />
                  @endif
              </div>
            </div>
        </div>
      </div>
      <div class="form-group row">
          {{ Form::submit('Submit', array('class' => 'btn btn-success')) }}
      </div>
      {{ Form::close() }}
    </div>
  </div>
</div>

@stop
