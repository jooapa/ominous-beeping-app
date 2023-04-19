ECHO off
ECHO Add and Run
ECHO 1.Android
ECHO 2.Electron
ECHO 3.Browser
ECHO 4.IOS
CHOICE /C 1234 /M "Enter your choice:"

IF "%errorlevel%"=="4" (
    REM Initializing IOS
    cd ominous
    cordova platform add ios
    cordova run ios
    cmd.exe
) ELSE IF "%errorlevel%"=="3" (
    REM Initializing browser
    cd ominous
    cordova platform add browser
    cordova run browser
    cmd.exe
    GOTO end
) ELSE IF "%errorlevel%"=="2" (
    REM Initializing electron
    cd ominous
    cordova platform add electron
    cordova run electron
    cmd.exe
) ELSE IF "%errorlevel%"=="1" (
    REM Initializing android
    cd ominous
    cordova platform add android
    cordova run android
    cmd.exe
)
