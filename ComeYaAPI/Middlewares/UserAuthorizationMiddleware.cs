using System.Security.Claims;

namespace ComeYaAPI.Middlewares
{
    public class UserAuthorizationMiddleware
    {
        private readonly RequestDelegate _next;

        public UserAuthorizationMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var userIdFromToken = context.User.FindFirst("id")?.Value;
            var userIdFromRoute = context.GetRouteValue("id")?.ToString();

            if (!string.IsNullOrEmpty(userIdFromToken) && !string.IsNullOrEmpty(userIdFromRoute) &&
                userIdFromToken != userIdFromRoute)
            {
                // El identificador de usuario en el token no coincide con el de la ruta
                context.Response.StatusCode = 403; // Forbidden
                return;
            }

            await _next.Invoke(context);
        }
    }

}
