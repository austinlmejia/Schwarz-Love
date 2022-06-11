import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"matching"} />
		<Helmet>
			<title>
				SchwarzLove
			</title>
			<meta name={"description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:title"} content={"You choose are great vacation"} />
			<meta property={"og:description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/OGimage.png?v=2021-09-23T20:32:10.363Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<meta name={"msapplication-TileColor"} content={"#ff007a"} />
		</Helmet>
		<Section padding="18px 0 18px 0" quarkly-title="Header" background="--color-purple" color="--light">
			<Override
				slot="SectionContent"
				justify-content="space-around"
				flex-direction="row"
				align-items="center"
				font="600 20px/1.3 --fontFamily-googleManrope"
				sm-font="600 13px/1.3 --fontFamily-googleManrope"
			/>
			<Text margin="0px 0px 0px 0px" font="600 20px/1.3 --fontFamily-googleManrope" sm-font="600 16px/1.3 --fontFamily-googleManrope">
				A Schwarzman Social Club Project
			</Text>
		</Section>
		<Section padding="60px 0 60px 0" quarkly-title="HeroBlock" background="--color-purple" sm-padding="30px 0 20px 0">
			<Override slot="SectionContent" display="inline" text-align="center" />
			<Box min-width="100px" min-height="100px" width="75%" sm-width="100%">
				<Text
					color="--light"
					lg-font="normal 800 120px/1 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 170px/1 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					font="normal 800 180px/1.2 --fontFamily-googleManrope"
					align-self="flex-start"
					text-align="left"
					sm-font="normal 800 65px/1 &quot;Manrope&quot;, sans-serif"
				>
					Matching
				</Text>
			</Box>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0" lg-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="60%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				lg-width="60%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					This is the easy part: just click and select every person you  like.
				</Text>
			</Box>
		</Section>
		<Section align-items="center">
			<Override slot="SectionContent" align-items="center" />
			<Components.QuarklycommunityKitForm width="50%" margin="0px 300px 0px 0px" sm-width="100%" sm-margin="0px 0 0px 0px">
				<Components.SchwarzLoveFormContent>
					<Override slot="input" placeholder="John Doe" required />
					<Override slot="input1" placeholder="john.doe@sc.tsinghua.edu.cn" required />
					<Override slot="quarklycommunityKitCheckbox" name="Zahrah" />
					<Override slot="quarklycommunityKitCheckbox1" name="Vidette" />
					<Override slot="quarklycommunityKitCheckbox2" name="Maria" />
					<Override slot="quarklycommunityKitCheckbox3" name="Andrey" />
					<Override slot="quarklycommunityKitCheckbox4" name="Arjun-Alim" />
					<Override slot="quarklycommunityKitCheckbox5" name="Hasani" />
					<Override slot="quarklycommunityKitCheckbox6" name="Diane" />
					<Override slot="quarklycommunityKitCheckbox7" name="Eleni" />
					<Override slot="quarklycommunityKitCheckbox8" name="Matt" />
					<Override slot="quarklycommunityKitCheckbox9" name="Daniyar" />
					<Override slot="quarklycommunityKitCheckbox10" name="Jamie" />
					<Override slot="quarklycommunityKitCheckbox11" name="Patrik" />
					<Override slot="quarklycommunityKitCheckbox12" name="Taylah" />
					<Override slot="quarklycommunityKitCheckbox13" name="Taylor" />
					<Override slot="quarklycommunityKitCheckbox14" name="Ty" />
					<Override slot="quarklycommunityKitCheckbox15" name="Katherine" />
					<Override slot="quarklycommunityKitCheckbox16" name="Suraj" />
					<Override slot="quarklycommunityKitCheckbox17" name="Jared" />
					<Override slot="quarklycommunityKitCheckbox18" name="Henry" />
					<Override slot="quarklycommunityKitCheckbox19" name="Luise" />
					<Override slot="quarklycommunityKitCheckbox20" name="Luke" />
					<Override slot="quarklycommunityKitCheckbox21" name="Ariana" />
					<Override slot="quarklycommunityKitCheckbox22" name="Gurchit" />
					<Override slot="quarklycommunityKitCheckbox23" name="Laura" />
					<Override slot="quarklycommunityKitCheckbox24" name="Xiao" />
					<Override slot="quarklycommunityKitCheckbox25" name="ChenChen" />
					<Override slot="quarklycommunityKitCheckbox26" name="Shomy" />
					<Override slot="quarklycommunityKitCheckbox27" name="WanFung" />
					<Override slot="quarklycommunityKitCheckbox28" name="ACrich" />
					<Override slot="quarklycommunityKitCheckbox29" name="Haotian" />
					<Override slot="quarklycommunityKitCheckbox30" name="Guillaume" />
					<Override slot="quarklycommunityKitCheckbox31" name="Oyumaa" />
					<Override slot="quarklycommunityKitCheckbox32" name="Louis" />
					<Override slot="quarklycommunityKitCheckbox33" name="Sameer" />
					<Override slot="quarklycommunityKitCheckbox34" name="Julius" />
					<Override slot="quarklycommunityKitCheckbox35" name="Ilene" />
					<Override slot="quarklycommunityKitCheckbox36" name="Zakiyya" />
					<Override slot="quarklycommunityKitCheckbox37" name="Lamount" />
					<Override slot="quarklycommunityKitCheckbox38" name="Michelle" />
					<Override slot="quarklycommunityKitCheckbox39" name="Carlos" />
					<Override slot="quarklycommunityKitCheckbox40" name="Leo" />
					<Override slot="quarklycommunityKitCheckbox41" name="Atticus" />
					<Override slot="quarklycommunityKitCheckbox42" name="Vodka" />
					<Override slot="quarklycommunityKitCheckbox43" name="DG" />
					<Override slot="quarklycommunityKitCheckbox44" name="Jessica" />
					<Override slot="quarklycommunityKitCheckbox45" name="Alan" />
					<Override slot="quarklycommunityKitCheckbox46" name="Selena" />
					<Override slot="quarklycommunityKitCheckbox47" name="Keren" />
					<Override slot="quarklycommunityKitCheckbox48" name="Omar" />
					<Override slot="quarklycommunityKitCheckbox49" name="Fletcher" />
					<Override slot="quarklycommunityKitCheckbox50" name="Lucia" />
					<Override slot="quarklycommunityKitCheckbox51" name="Jiaheng" />
					<Override slot="quarklycommunityKitCheckbox52" name="AHeintze" />
					<Override slot="quarklycommunityKitCheckbox53" name="Alice" />
					<Override slot="quarklycommunityKitCheckbox54" name="Lena" />
					<Override slot="quarklycommunityKitCheckbox55" name="Jenn" />
					<Override slot="quarklycommunityKitCheckbox56" name="Lujain" />
					<Override slot="quarklycommunityKitCheckbox57" name="Charles" />
					<Override slot="quarklycommunityKitCheckbox58" name="Nikhil" />
					<Override slot="quarklycommunityKitCheckboxOverride59">
						Zumrad "Zuma" Jalilova
					</Override>
					<Override slot="quarklycommunityKitCheckbox59" name="Zuma" />
					<Override slot="quarklycommunityKitCheckbox60" name="Lorena" />
					<Override slot="quarklycommunityKitCheckbox61" name="Elaine" />
					<Override slot="quarklycommunityKitCheckbox62" name="Sophie" />
					<Override slot="quarklycommunityKitCheckbox63" name="Trent" />
					<Override slot="quarklycommunityKitCheckbox64" name="Vanshica" />
					<Override slot="quarklycommunityKitCheckbox65" name="Melissa" />
					<Override slot="quarklycommunityKitCheckbox66" name="Josh" />
					<Override slot="quarklycommunityKitCheckbox67" name="Roda" />
					<Override slot="quarklycommunityKitCheckbox68" name="Haris" />
					<Override slot="quarklycommunityKitCheckbox69" name="Matea" />
					<Override slot="quarklycommunityKitCheckbox70" name="ArjunK" />
					<Override slot="quarklycommunityKitCheckbox71" name="Margo" />
					<Override slot="quarklycommunityKitCheckbox72" name="Jack" />
					<Override slot="quarklycommunityKitCheckbox73" name="Tre" />
					<Override slot="quarklycommunityKitCheckbox74" name="Molly" />
					<Override slot="quarklycommunityKitCheckbox75" name="ALi" />
					<Override slot="quarklycommunityKitCheckbox76" name="Miranda" />
					<Override slot="quarklycommunityKitCheckbox77" name="Jin" />
					<Override slot="quarklycommunityKitCheckbox78" name="ALiu" />
					<Override slot="quarklycommunityKitCheckbox79" name="Dwight" />
					<Override slot="quarklycommunityKitCheckbox80" name="Ben" />
					<Override slot="quarklycommunityKitCheckbox81" name="Fran" />
					<Override slot="quarklycommunityKitCheckbox82" name="Susana" />
					<Override slot="quarklycommunityKitCheckbox83" name="Tafadzma" />
					<Override slot="quarklycommunityKitCheckbox84" name="Michael" />
					<Override slot="quarklycommunityKitCheckbox85" name="Zihao" />
					<Override slot="quarklycommunityKitCheckbox86" name="AustinSexiestMan" />
					<Override slot="quarklycommunityKitCheckbox87" name="Lucio" />
					<Override slot="quarklycommunityKitCheckbox88" name="Jevon" />
					<Override slot="quarklycommunityKitCheckbox89" name="Eli" />
					<Override slot="quarklycommunityKitCheckbox90" name="Eric" />
					<Override slot="quarklycommunityKitCheckbox91" name="Malike" />
					<Override slot="quarklycommunityKitCheckbox92" name="Karuna" />
					<Override slot="quarklycommunityKitCheckbox93" name="Alliance" />
					<Override slot="quarklycommunityKitCheckbox94" name="Sergio" />
					<Override slot="quarklycommunityKitCheckbox95" name="Serge" />
					<Override slot="quarklycommunityKitCheckboxOverride94">
						Sergio Nuhrmann
					</Override>
					<Override slot="quarklycommunityKitCheckbox96" name="Arinze" />
					<Override slot="quarklycommunityKitCheckbox97" name="Segun" />
					<Override slot="quarklycommunityKitCheckbox98" name="Yucheng" />
					<Override slot="quarklycommunityKitCheckbox99" name="WAP" />
					<Override slot="quarklycommunityKitCheckbox100" name="John" />
					<Override slot="quarklycommunityKitCheckbox101" name="Cristina" />
					<Override slot="quarklycommunityKitCheckbox102" name="Mallie" />
					<Override slot="quarklycommunityKitCheckbox103" name="Mikaela" />
					<Override slot="quarklycommunityKitCheckbox104" name="HarrisR" />
					<Override slot="quarklycommunityKitCheckbox105" name="karthik" />
					<Override slot="quarklycommunityKitCheckbox106" name="otelo" />
					<Override slot="quarklycommunityKitCheckbox107" name="Caleb" />
					<Override slot="quarklycommunityKitCheckbox108" name="Julien" />
					<Override slot="quarklycommunityKitCheckbox109" name="Philip" />
					<Override slot="quarklycommunityKitCheckbox110" name="Paulina" />
					<Override slot="quarklycommunityKitCheckbox111" name="Alois" />
					<Override slot="quarklycommunityKitCheckbox112" name="WilliamS" />
					<Override slot="quarklycommunityKitCheckbox113" name="Harry" />
					<Override slot="quarklycommunityKitCheckbox114" name="Jeremiah" />
					<Override slot="quarklycommunityKitCheckbox115" name="Tony" />
					<Override slot="quarklycommunityKitCheckbox116" name="Saad" />
					<Override slot="quarklycommunityKitCheckbox117" name="Eduarda" />
					<Override slot="quarklycommunityKitCheckbox118" name="Igor" />
					<Override slot="quarklycommunityKitCheckbox119" name="Zhi Min" />
					<Override slot="quarklycommunityKitCheckbox120" name="Shivam" />
					<Override slot="quarklycommunityKitCheckbox121" name="Kuwar" />
					<Override slot="quarklycommunityKitCheckbox122" name="Sadie" />
					<Override slot="quarklycommunityKitCheckbox123" name="Trenton" />
					<Override slot="quarklycommunityKitCheckbox124" name="Bryan" />
					<Override slot="quarklycommunityKitCheckbox125" name="Annie" />
					<Override slot="quarklycommunityKitCheckbox126" name="TangTang" />
					<Override slot="quarklycommunityKitCheckbox127" name="Mabel" />
					<Override slot="quarklycommunityKitCheckbox128" name="Anathi" />
					<Override slot="quarklycommunityKitCheckbox129" name="Denyse" />
					<Override slot="quarklycommunityKitCheckbox130" name="Emma" />
					<Override slot="quarklycommunityKitCheckbox131" name="Milan" />
					<Override slot="quarklycommunityKitCheckbox132" name="Turan" />
					<Override slot="quarklycommunityKitCheckbox133" name="Ava" />
					<Override slot="quarklycommunityKitCheckbox134" name="CC" />
					<Override slot="quarklycommunityKitCheckbox135" name="Factor" />
					<Override slot="quarklycommunityKitCheckbox136" name="Jenna" />
					<Override slot="quarklycommunityKitCheckbox137" name="Raven" />
					<Override slot="quarklycommunityKitCheckbox138" name="Richard" />
					<Override slot="quarklycommunityKitCheckbox139" name="Fisher" />
					<Override slot="quarklycommunityKitCheckbox140" name="Yida" />
					<Override slot="quarklycommunityKitCheckbox141" name="Mingqi" />
					<Override slot="quarklycommunityKitCheckbox142" name="Sally" />
					<Override slot="quarklycommunityKitCheckbox143" name="Pearl" />
					<Override slot="quarklycommunityKitCheckbox144" name="Bob" />
					<Override slot="quarklycommunityKitCheckbox145" name="Kristina" />
					<Override slot="quarklycommunityKitCheckbox146" name="Ryan" />
					<Override slot="quarklycommunityKitCheckbox147" name="AZhao" />
					<Override slot="quarklycommunityKitCheckbox148" name="Jason" />
					<Override slot="quarklycommunityKitCheckbox149" name="Warren" />
					<Override slot="quarklycommunityKitCheckbox150" name="Courtney" />
				</Components.SchwarzLoveFormContent>
			</Components.QuarklycommunityKitForm>
			<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
				<Button>
					Send
				</Button>
			</Box>
		</Section>
		<Section background="--color-purple">
			<Override slot="SectionContent" color="--light" font="--headline2" text-align="center" />
			<Text margin="20px 0px 0px 0px" sm-font="700 40px/60px Manrope, sans-serif">
				Love is just a click away.{" "}
			</Text>
			<Box min-width="100px" min-height="100px">
				<Button
					text-align="center"
					background="--color-light"
					color="--purple"
					font="normal 500 18px/1.5 &quot;Manrope&quot;, sans-serif"
					margin="20px 0px 0px 0px"
				>
					Get Matched
				</Button>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});