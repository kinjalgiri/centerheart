/**
 * Handle all your social auth routesß
 *
 * @author Kinjalgiri Goswami <kinjalgiri@gmail.com>
 */

class Social {
  public static googleCallback(req, res): any {
    return res.redirect("/account");
  }
}

export default Social;
