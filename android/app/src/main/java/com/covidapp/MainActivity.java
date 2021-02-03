package com.covidapp;

import android.os.Bundle;

import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "CovidApp";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this,getMainComponentName()){
      @Nullable
      @Override
      protected Bundle getLaunchOptions(){
        Bundle props = MainActivity.this.getIntent().getExtras();
        if(props != null)
          return props;
        return null;
      }
    };
  }
}
