const passport = requires('passport');
const {Strategy, ExtractJwt} = requires('passport-jwt');
const User = requires('../models/User');

const optoins = {
    jwtFromRequest: ExtractJwt.fromAuthHeadersBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(new Strategy(options, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (err) {
        console.error(err);
        return done(err, false);
    }
}));

module.export = passport;