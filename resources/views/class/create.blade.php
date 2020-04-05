@extends('common.default')
@section('content')
<div class="col-md-12 col-sm-12  ">
  <div class="x_panel">
    <div class="x_title">
      <h2 class="navbar-left">Thêm mới && <a href="{{ action('ClassController@index') }}" style="color:darkred">Trở lại</a></h2>
      <ul class="nav navbar-right panel_toolbox">
        <li>
          <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <br>
      {{ Form::open(array('method'=>'POST', 'action' => array('ClassController@store'),'class'=>'form-horizontal form-label-left')) }}
      <div class="form-group row">
        <div class="col-md-4 col-sm-4  form-group has-feedback">
          {{ Form::text('name', null, array('class' => 'form-control has-feedback-left','placeholder'=>'tên lớp')) }}
          <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
        </div>
        <div class="col-md-4 col-sm-4  form-group has-feedback">
          {{ Form::text('desc', null, array('class' => 'form-control has-feedback-left','placeholder'=>'mô tả')) }}
          <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-6 col-sm-6  form-group has-feedback">
            <label class="control-label col-md-2 col-sm-2">Môn</label>
            <div class="col-md-11 col-sm-11 ">
              {{ Form::select('schoolsubjects_id', getListMon(), array('class' => 'form-control')) }}
            </div>
        </div>
        <div class="col-md-6 col-sm-6  form-group has-feedback">
            <label class="control-label col-md-2 col-sm-2">Khối</label>
            <div class="col-md-11 col-sm-11 ">
              {{ Form::select('schoolblock_id', getListKhoi(), array('class' => 'form-control')) }}
            </div>
        </div>
      </div>
      <div class="form-group row">
          {{ Form::submit('Submit', array('class' => 'btn btn-success')) }}
          {{ Form::reset('Reset', array('class' => 'btn btn-info')) }}
      </div>
      {{ Form::close() }}
    </div>
  </div>
</div>
@stop