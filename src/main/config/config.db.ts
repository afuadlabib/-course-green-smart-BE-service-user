import mongoose, { ConnectOptions } from "mongoose";

const optionsMongo = <ConnectOptions> {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export const connectDB = (): void => {
    const mongoUrl: string = <string> process.env.MONGODB_URL
    mongoose
        .connect(mongoUrl,optionsMongo)
        .then((): void => {
            console.log("DB Connected");
        })
}