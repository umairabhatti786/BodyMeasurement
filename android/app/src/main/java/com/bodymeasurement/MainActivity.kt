package com.bodymeasurement

import android.os.Bundle
import android.view.View
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. 
   * This is used to schedule rendering of the component.
   */
  override fun getMainComponentName(): String = "BodyMeasurement"

  /**
   * Returns the instance of the [ReactActivityDelegate].
   * We use [DefaultReactActivityDelegate] which allows enabling
   * the New Architecture with a single boolean flag [fabricEnabled].
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
    DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  /**
   * Enable immersive mode to hide only the bottom navigation bar.
   */
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)

    // ✅ Hide only the bottom nav bar; keep status bar visible
    window.decorView.systemUiVisibility = (
      View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
        or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
    )
  }

  /**
   * Re-apply immersive mode on focus regain (when user swipes or app resumes)
   */
  override fun onWindowFocusChanged(hasFocus: Boolean) {
    super.onWindowFocusChanged(hasFocus)

    if (hasFocus) {
      window.decorView.systemUiVisibility = (
        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
          or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      )
    }
  }
}
