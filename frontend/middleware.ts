import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const test = true;
export async function middleware(req: NextRequest) {
    const cookie = req.cookies.get("pb_auth")
    if( cookie ){
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
    matcher: ["/create_template", "/templates", "/preset_1", "/preset_2", "/preset_3", "/preset_4"]
}