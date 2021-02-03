package com.covidapp;

import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext context;

    public CalendarModule(ReactApplicationContext context){
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarStarter";
    }

    @ReactMethod
    public void startCalendarNativeActivity() {
        Intent intent = new Intent(context,CalendarActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }

    @ReactMethod
    public void callbackReact(boolean pass, Promise promise) {
        Log.i("React Native","Initializing native activity...");
        Handler handler = new Handler(Looper.getMainLooper());
        handler.postDelayed(()->{
            if(pass)
                promise.resolve("Native has passed, promise resolved");
            else
                promise.reject("400","Bad Request detected for the App");
        },2000);
    }

}
