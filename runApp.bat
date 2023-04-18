@ECHO OFF

ECHO Add and Run
ECHO 1.Android
ECHO 2.Electron
ECHO 3.Browser
ECHO 4.IOS
CHOICE /C 1234 /M "Enter your choice:"

:: Note - list ERRORLEVELS in decreasing order
IF ERRORLEVEL 4 GOTO IOS
IF ERRORLEVEL 3 GOTO browser
IF ERRORLEVEL 2 GOTO electron
IF ERRORLEVEL 1 GOTO android

:android
cordova platform add android
cordova build android
GOTO End

:electron
cordova platform add electron
cordova build electron
GOTO End

:browser
cordova platform add browser
cordova run browser
GOTO End

:IOS
cordova platform add ios
cordova build ios
cmd.exe
GOTO End

:End
