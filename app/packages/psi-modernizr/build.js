/**
 * Created by Aleh_Atsman on 4/15/2015.
 */
var modernizr = Npm.require('modernizr');
var loadJSONContent = function (compileStep, content) {
  try {
    return JSON.parse(content);
  }
  catch (e) {
    compileStep.error({
      message: '=>Modernize, syntax error in ' + compileStep.inputPath,
      line: e.line,
      column: e.column
    });
  }
};

var loadJSONFile = function (compileStep) {
  var content = compileStep.read().toString('utf8');
  return loadJSONContent(compileStep, content);
};

function processModernizr(config, handler) {
  if(!processModernizr.cache) {
    modernizr.build(config, function (result) {
      processModernizr.cache = result;
      handler(processModernizr.cache);
    });
  } else {
    handler(processModernizr.cache);
  }
}

Plugin.registerSourceHandler('modernizr.json', function (compileStep) {
  var fileContents = loadJSONFile(compileStep);
  processModernizr(fileContents, function(content) {
    console.log('=> Building modernize...\n');

    compileStep.addJavaScript({
      path: compileStep.inputPath + '.js',
      sourcePath: compileStep.inputPath,
      data: content
    });
  });
});

