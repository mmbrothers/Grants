using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Grants.Startup))]
namespace Grants
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
