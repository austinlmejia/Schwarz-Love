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
					<Override slot="input" placeholder="John Doe" />
					<Override slot="input1" placeholder="john.doe@sc.tsinghua.edu.cn" />
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