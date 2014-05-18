var meiligao = require('../index.js');

// Set up server
var server = new meiligao.Server().listen(20180, function(error) {
    if (error) throw error;
    console.log('gps server is listening');
});

// All commands will be executed one by one
// Uncomment commands to enable
server.on('connect', function(tracker) { 

    // tracker.requestReport(function(err, data) {
        // if (err) {
            // console.log('REQUEST REPORT ERROR: ', err);
        // } else {
            // console.log('REQUEST REPORT: ', data);
        // }
    // });
    
    // tracker.getSnImei(function(err, data) {
        // if (err) {
            // console.log('GET SN IMEI ERROR: ', err);
        // } else {
            // console.log('GET SN IMEI: ', data);
        // }
    // });
    
    // tracker.resetConfiguration(function(err, result){
        // if (err) {
            // console.log('RESET CONFIGURATION ERROR: ', err);
        // } else {
            // console.log('RESET CONFIGURATION: ', result);
        // }
    // });    
    
    // tracker.setHeartbeatInterval(1, function(err, result){
        // if (err) {
            // console.log('SET HEARTBEAT INTERVAL ERROR: ', err);
        // } else {
            // console.log('SET HEARTBEAT INTERVAL: ', result);
        // }
    // });    
    
    // tracker.clearMileage(function(err, result){
        // if (err) {
            // console.log('CLEAR MILEAGE ERROR: ', err);
        // } else {
            // console.log('CLEAR MILEAGE: ', result);
        // }
    // });    
    
    // tracker.getMemoryReports(function(err, reports){
        // if (err) {
            // console.log('GET MEMORY REPORTS ERROR: ', err);
        // } else {
            // console.log('GET MEMORY REPORTS: ', reports);
        // }
    // });        
    
    // tracker.setMemoryReportInterval(1, function(err, result){
        // if (err) {
            // console.log('SET MEMORY REPORT INTERVAL ERROR: ', err);
        // } else {
            // console.log('SET MEMORY REPORT INTERVAL: ', result);
        // }
    // });    
    
    // tracker.clearMemoryReports(function(err, result){
        // if (err) {
            // console.log('CLEAR MEMORY REPORTS ERROR: ', err);
        // } else {
            // console.log('CLEAR MEMORY REPORTS: ', result);
        // }
    // });
        
    // tracker.setAuthorizedPhones(79991234567, 79991234567, function(err, result){
        // if (err) {
            // console.log('SET AUTHORIZED PHONE ERROR: ', err);
        // } else {
            // console.log('SET AUTHORIZED PHONE: ', result);
        // }
    // });    
    
    // tracker.getAuthorizedPhones(function(err, phones){
        // if (err) {
            // console.log('GET AUTHORIZED PHONES ERROR: ', err);
        // } else {
            // console.log('GET AUTHORIZED PHONES: ', phones);
        // }
    // });
    
    
    // tracker.setReportTimeInterval(2, function(err, result){
        // if (err) {
            // console.log('SET REPORT TIME INTERVAL ERROR: ', err);
        // } else {
            // console.log('SET REPORT TIME INTERVAL: ', result);
        // }
    // });        
    
    // tracker.getReportTimeInterval(function(err, interval){
        // if (err) {
            // console.log('GET REPORT TIME INTERVAL ERROR: ', err);
        // } else {
            // console.log('GET REPORT TIME INTERVAL: ', interval);
        // }
    // });
    
    // tracker.setReportDistanceInterval(300, function(err, result){
        // if (err) {
            // console.log('SET REPORT DISTANCE INTERVAL ERROR: ', err);
        // } else {
            // console.log('SET REPORT DISTANCE INTERVAL: ', result);
        // }
    // });    
    
    // tracker.setAlarmSpeeding(15, function(err, result){
        // if (err) {
            // console.log('SET ALARM SPEEDING ERROR: ', err);
        // } else {
            // console.log('SET ALARM SPEEDING: ', result);
        // }
    // });       
    
    // tracker.setAlarmMovement(0x03, function(err, result){
        // if (err) {
            // console.log('SET ALARM MOVEMENT ERROR: ', err);
        // } else {
            // console.log('SET ALARM MOVEMENT: ', result);
        // }
    // });        
    
    // tracker.setAlarmGeofence(55.753905, 37.620872, 200, function(err, result){
        // if (err) {
            // console.log('SET ALARM GEOFENCE ERROR: ', err);
        // } else {
            // console.log('SET ALARM GEOFENCE: ', result);
        // }
    // });    
    
});

// Handle errors
server.on('login', function(tracker){ console.log(tracker.queue); });

// Handle errors
server.on('error', function(error, tracker){ console.log('error happened', error); });

// Handle disconnects
server.on('disconnect', function(tracker){ console.log('tracker disconnected'); });