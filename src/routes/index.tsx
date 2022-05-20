import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";

import { SignIn } from "../Telas/SignIn";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            {/* se eu tenho um id (ou seja alguem logado) mando pra tela inicial, se n tiver mando pra tela de signIn */}
            {user.id ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>
    )
}