const common = [
    'tests/features/**/*.feature', //  .feature files
    '--require tests/step-definitions/**/*.js', // step definitions
    '--format progress', // output format
    // '--format node_modules/cucumber-html-reporter', // HTML report (opcional)
    '--format json:reports/cucumber_report.json',  // Generar reporte en JSON
    '--require tests/hooks/hooks.js', 
  ].join(' ');
  
  module.exports = {
    default: common
  };
  