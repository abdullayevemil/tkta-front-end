import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message }: { message: string } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Siz vebsayt üçün chatbotsunuz Yalnız bu saytla bağlı suallara cavab verin Sual əlaqəli deyilsə belə cavab verin Üzr istəyirəm mən yalnız bu vebsayt haqqında suallara cavab verə bilərəm Veb sayt təhsilin keyfiyyətinin təminatı agentliyinin internet saytıdır Burada diqqət etməli olduğunuz bəzi mövzular var 1 Diplomu necə təsdiq etmək olar - istifadəçini >Fəaliyyət Sahələrimiz> Xarici kvalifikasiyalarin tanınması bölməsinə navigasiyadan keçməsini deyin 2 son xəbərləri və müsahibələri necə oxuya bilərəm - naviqasiyada media bölməsinə keçin sonra xəbərlər müsahibə və ya maraqlandığınız digər bölməyə klikləyin və sayrı daha çox məlumat veriləcək",
        },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({
      reply: response.choices[0]?.message?.content ?? "No response",
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      { error: "Failed to communicate with OpenAI API" },
      { status: 500 }
    );
  }
}
