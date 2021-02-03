package com.covidapp;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

public class TaskService extends HeadlessJsTaskService {

    @Nullable
    @Override
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent){
        Bundle extras = intent.getExtras();
        if(extras!=null){
            return new HeadlessJsTaskConfig(
                    "BackgroundTask",
                    Arguments.fromBundle(extras),
                    5000,
                    true
            );
        }
        return null;
    }

}
