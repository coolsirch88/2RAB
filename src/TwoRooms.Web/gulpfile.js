/// <binding AfterBuild='build' />
// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('gulpbuild/tasks');
