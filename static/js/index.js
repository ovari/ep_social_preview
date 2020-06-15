exports.handleClientMessage_CUSTOM = function(hook, context, cb){
  if(context.payload.action == "recieveTitleMessage"){
    var message = context.payload.message;
    if(message){
      $('head').append('<meta property="og:title" content="'+message+'" />');
    }else{
      $('head').append('<meta property="og:title" content="Untitle Document" />');
    }
  }
}

exports.documentReady = function(){
  if (clientVars.meta_desc){
    $('head').append('  <meta property="og:description" content="'+clientVars.meta_desc+'" />');
  }else{
    $('head').append('  <meta property="og:description" content="Untitle Document" />');
  }


  
}