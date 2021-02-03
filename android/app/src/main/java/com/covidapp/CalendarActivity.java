package com.covidapp;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class CalendarActivity extends AppCompatActivity {

    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calendar);

        //int permissionCheck = ContextCompat.checkSelfPermission(this, Manifest.permission.WAKE_LOCK);
        //if (permissionCheck != PackageManager.PERMISSION_GRANTED){
        //    ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WAKE_LOCK},1001);
        //}

        Intent intent = new Intent(this,TaskService.class);
        intent.putExtra("react","service");
        getApplicationContext().startService(intent);
    }

}
