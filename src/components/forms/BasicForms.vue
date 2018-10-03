<template>
  <div class="animated fadeIn">
    <div class="row">


      <div class="col-xs-12 col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Basic Form</strong> Elements
          </div>
          <div class="card-body card-block">
            <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
              <div class="row form-group">
                <div class="col col-md-3"><label class=" form-control-label">Static</label></div>
                <div class="col-12 col-md-9">
                  <p class="form-control-static">Username</p>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Text Input</label></div>
                <div class="col-12 col-md-9"><input type="text" id="text-input" name="text-input" placeholder="Text" class="form-control"><small class="form-text text-muted">This is a help text</small></div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="email-input" class=" form-control-label">Email Input</label></div>
                <div class="col-12 col-md-9"><input type="email" id="email-input" name="email-input" placeholder="Enter Email" class="form-control"><small class="help-block form-text">Please enter your email</small></div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="password-input" class=" form-control-label">Password</label></div>
                <div class="col-12 col-md-9"><input type="password" id="password-input" name="password-input" placeholder="Password" class="form-control"><small class="help-block form-text">Please enter a complex password</small></div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="disabled-input" class=" form-control-label">Disabled Input</label></div>
                <div class="col-12 col-md-9"><input type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled="" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Textarea</label></div>
                <div class="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Content..." class="form-control"></textarea></div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="select" class=" form-control-label">Select</label></div>
                <div class="col-12 col-md-9">
                  <select name="select" id="select" class="form-control">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="selectLg" class=" form-control-label">Select Large</label></div>
                <div class="col-12 col-md-9">
                  <select name="selectLg" id="selectLg" class="form-control-lg form-control">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="selectSm" class=" form-control-label">Select Small</label></div>
                <div class="col-12 col-md-9">
                  <select name="selectSm" id="SelectLm" class="form-control-sm form-control">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                    <option value="4">Option #4</option>
                    <option value="5">Option #5</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="disabledSelect" class=" form-control-label">Disabled Select</label></div>
                <div class="col-12 col-md-9">
                  <select name="disabledSelect" id="disabledSelect" disabled="" class="form-control">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="multiple-select" class=" form-control-label">Multiple select</label></div>
                <div class="col col-md-9">
                  <select name="multiple-select" id="multiple-select" multiple="" class="form-control">
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                    <option value="4">Option #4</option>
                    <option value="5">Option #5</option>
                    <option value="6">Option #6</option>
                    <option value="7">Option #7</option>
                    <option value="8">Option #8</option>
                    <option value="9">Option #9</option>
                    <option value="10">Option #10</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label class=" form-control-label">Radios</label></div>
                <div class="col col-md-9">
                  <div class="form-check">
                    <div class="radio">
                      <label for="radio1" class="form-check-label ">
                        <input type="radio" id="radio1" name="radios" value="option1" class="form-check-input">Option 1
                      </label>
                    </div>
                    <div class="radio">
                      <label for="radio2" class="form-check-label ">
                        <input type="radio" id="radio2" name="radios" value="option2" class="form-check-input">Option 2
                      </label>
                    </div>
                    <div class="radio">
                      <label for="radio3" class="form-check-label ">
                        <input type="radio" id="radio3" name="radios" value="option3" class="form-check-input">Option 3
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label class=" form-control-label">Inline Radios</label></div>
                <div class="col col-md-9">
                  <div class="form-check-inline form-check">
                    <label for="inline-radio1" class="form-check-label ">
                      <input type="radio" id="inline-radio1" name="inline-radios" value="option1" class="form-check-input">One
                    </label>
                    <label for="inline-radio2" class="form-check-label ">
                      <input type="radio" id="inline-radio2" name="inline-radios" value="option2" class="form-check-input">Two
                    </label>
                    <label for="inline-radio3" class="form-check-label ">
                      <input type="radio" id="inline-radio3" name="inline-radios" value="option3" class="form-check-input">Three
                    </label>
                  </div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label class=" form-control-label">Checkboxes</label></div>
                <div class="col col-md-9">
                  <div class="form-check">
                    <div class="checkbox">
                      <label for="checkbox1" class="form-check-label ">
                        <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" class="form-check-input">Option 1
                      </label>
                    </div>
                    <div class="checkbox">
                      <label for="checkbox2" class="form-check-label ">
                        <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" class="form-check-input"> Option 2
                      </label>
                    </div>
                    <div class="checkbox">
                      <label for="checkbox3" class="form-check-label ">
                        <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" class="form-check-input"> Option 3
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label class=" form-control-label">Inline Checkboxes</label></div>
                <div class="col col-md-9">
                  <div class="form-check-inline form-check">
                    <label for="inline-checkbox1" class="form-check-label ">
                      <input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" class="form-check-input">One
                    </label>
                    <label for="inline-checkbox2" class="form-check-label ">
                      <input type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" class="form-check-input">Two
                    </label>
                    <label for="inline-checkbox3" class="form-check-label ">
                      <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" class="form-check-input">Three
                    </label>
                  </div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="file-input" class=" form-control-label">File input</label></div>
                <div class="col-12 col-md-9"><input type="file" id="file-input" name="file-input" class="form-control-file"></div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-sm">
              <i class="fa fa-dot-circle-o"></i> Submit
            </button>
            <button type="reset" class="btn btn-danger btn-sm">
              <i class="fa fa-ban"></i> Reset
            </button>
          </div>
        </div>

      </div>

      <div class="col-xs-12 col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Horizontal</strong> Form
          </div>
          <div class="card-body card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="row form-group">
                <div class="col col-md-3"><label for="hf-email" class=" form-control-label">Email</label></div>
                <div class="col-12 col-md-9"><input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." class="form-control"><span class="help-block">Please enter your email</span></div>
              </div>
              <div class="row form-group">
                <div class="col col-md-3"><label for="hf-password" class=" form-control-label">Password</label></div>
                <div class="col-12 col-md-9"><input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." class="form-control"><span class="help-block">Please enter your password</span></div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-sm">
              <i class="fa fa-dot-circle-o"></i> Submit
            </button>
            <button type="reset" class="btn btn-danger btn-sm">
              <i class="fa fa-ban"></i> Reset
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>Normal</strong> Form
          </div>
          <div class="card-body card-block">
            <form action="" method="post" class="">
              <div class="form-group"><label for="nf-email" class=" form-control-label">Email</label><input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." class="form-control"><span class="help-block">Please enter your email</span></div>
              <div class="form-group"><label for="nf-password" class=" form-control-label">Password</label><input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." class="form-control"><span class="help-block">Please enter your password</span></div>
            </form>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-sm">
              <i class="fa fa-dot-circle-o"></i> Submit
            </button>
            <button type="reset" class="btn btn-danger btn-sm">
              <i class="fa fa-ban"></i> Reset
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            Input <strong>Grid</strong>
          </div>
          <div class="card-body card-block">
            <form action="" method="post" class="form-horizontal">
              <div class="row form-group">
                <div class="col col-sm-3"><input type="text" placeholder=".col-sm-3" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-4"><input type="text" placeholder=".col-sm-4" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-5"><input type="text" placeholder=".col-sm-5" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-6"><input type="text" placeholder=".col-sm-6" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-7"><input type="text" placeholder=".col-sm-7" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-8"><input type="text" placeholder=".col-sm-8" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-9"><input type="text" placeholder=".col-sm-9" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-10"><input type="text" placeholder=".col-sm-10" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-11"><input type="text" placeholder=".col-sm-11" class="form-control"></div>
              </div>
              <div class="row form-group">
                <div class="col col-sm-12"><input type="text" placeholder=".col-sm-12" class="form-control"></div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-sm">
              <i class="fa fa-user"></i> Login
            </button>
            <button type="reset" class="btn btn-danger btn-sm">
              <i class="fa fa-ban"></i> Reset
            </button>
          </div>
        </div>
        

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'forms',
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>


<style scoped>
  .input-group-addon {
    background-color: transparent;
    border-left: 0;
}
</style>