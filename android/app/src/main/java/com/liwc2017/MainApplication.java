package com.liwc2017;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.rpt.reactnativecheckpackageinstallation.CheckPackageInstallationPackage;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.showlocationservicesdialogbox.LocationServicesDialogBoxPackage;
import com.airbnb.android.react.maps.MapsPackage;
import org.wonday.orientation.OrientationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new CheckPackageInstallationPackage(),
            new ReactNativeYouTube(),
            new LocationServicesDialogBoxPackage(),
            new MapsPackage(),
            new OrientationPackage(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
