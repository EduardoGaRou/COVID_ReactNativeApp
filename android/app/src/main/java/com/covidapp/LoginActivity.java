package com.covidapp;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import javax.annotation.Nullable;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Button loginBtn = findViewById(R.id.btn_login);
        EditText user = (EditText)findViewById(R.id.et_user);
        loginBtn.setOnClickListener(v -> {
            String usr = user.getText().toString();
            Intent intent = new Intent(LoginActivity.this, MainActivity.class);
            intent.putExtra("username", usr);
            startActivity(intent);
        });

        int permissionCheck = ContextCompat.checkSelfPermission(this, Manifest.permission.WAKE_LOCK);
        if (permissionCheck != PackageManager.PERMISSION_GRANTED){
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WAKE_LOCK},1001);
        }
    }

}
