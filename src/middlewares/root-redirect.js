'use strict';

module.exports = () => {
  return async (ctx, next) => {
    // Fix empty pathname issue
    let path = ctx.path || ctx.request.path;
    
    // If path is empty, undefined, or null, set it to /
    if (!path || path === '' || path === undefined || path === null) {
      path = '/';
      ctx.path = '/';
      ctx.request.path = '/';
    }
    
    // If path is just "/", redirect to admin path
    if (path === '/') {
      const adminPath = process.env.ADMIN_PATH || '/admin';
      // Ensure adminPath starts with /
      const redirectPath = adminPath.startsWith('/') ? adminPath : `/${adminPath}`;
      // Remove trailing slash if present (except for root)
      const cleanPath = redirectPath.endsWith('/') && redirectPath !== '/' 
        ? redirectPath.slice(0, -1) 
        : redirectPath;
      
      ctx.redirect(cleanPath);
      return;
    }
    
    await next();
  };
};

