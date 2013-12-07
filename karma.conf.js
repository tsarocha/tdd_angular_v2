// Karma configuration
// Generated on Tue Jun 25 2013 13:36:03 GMT+0700 (SE Asia Standard Time)

module.exports = function(karma) {
  karma.set({

    // base path, that will be used to resolve files and exclude
    // path ปัจจุบัน
    basePath: '',


    // frameworks to use for test
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    // libraries
    // เอา angular ขึ้นก่อน เพื่อให้ load อันดับแรก
    'static/js/lib/angular.min.js',
    'static/js/lib/*.js',

    // our app
    // code ของเรา
    'static/js/*.js',

    // tests 
    // folder specs จะเป็น test case เสมอ โดยควรที่จะโหลดหลังสุด
    // ชื่อ file ในนี้ ต้องลงท้ายด้วย _spec.js เสมอ!!!
    'specs/*',

    // templates
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    // แสดงผลการ test
    reporters: ['dots'],


    // web server port
    // ค่า default
    port: 9876,


    // cli runner port
    // ค่า default
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    // ค่า default
    colors: true,


    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: karma.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    // เพื่อให้เวลา save file แล้วมัน auto run test (ของ karma)
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
