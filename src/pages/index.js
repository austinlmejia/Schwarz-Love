import React from "react";
import theme from "theme";
import { Theme, Text, Section, Span, Box, Button, Em, Strong, Icon, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaCheck, FaExchangeAlt, FaHeart } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Matching
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
		<Section padding="60px 0 60px 0" quarkly-title="HeroBlock" background="--color-purple" sm-padding="60px 0 40px 0">
			<Override slot="SectionContent" display="inline" text-align="center" />
			<Box min-width="100px" min-height="100px" width="75%" sm-width="100%">
				<Text
					color="--light"
					lg-font="normal 800 40px/1 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 50px/1 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px -50px 0px"
					font="normal 800 80px/1.2 --fontFamily-googleManrope"
					align-self="flex-start"
					text-align="left"
					sm-margin="0px 0px 0 0px"
					sm-font="normal 800 28px/1 &quot;Manrope&quot;, sans-serif"
					md-margin="0px 0px 0 0px"
					lg-margin="0px 0px 0 0px"
				>
					SCHWARZ
				</Text>
				<Text
					color="--light"
					lg-font="normal 800 180px/1 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 170px/1 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					font="normal 800 250px/1.2 --fontFamily-googleManrope"
					align-self="flex-start"
					text-align="left"
					sm-font="normal 800 110px/1 &quot;Manrope&quot;, sans-serif"
				>
					LOVE
				</Text>
				<Text
					color="--light"
					lg-font="normal 800 28px/1 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
					margin="-40px 0px 0px 0px"
					font="normal 300 28px/2 --fontFamily-googleManrope"
					align-self="flex-end"
					text-align="right"
					sm-margin="0 0px 0px 0px"
					sm-font="normal 600 20px/1 &quot;Manrope&quot;, sans-serif"
					md-margin="0 0px 0px 0px"
					lg-margin="0 0px 0px 0px"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Because last chance could last forever.
					</Span>
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" text-align="right" sm-text-align="center">
				<Button
					text-align="center"
					background="--color-light"
					color="--purple"
					font="normal 500 18px/1.5 &quot;Manrope&quot;, sans-serif"
					margin="20px 0px 0px 0px"
					href="/index1"
				>
					Get Matched
				</Button>
			</Box>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					<Span color="--purple">
						SchwarzLOVE
					</Span>
					: the totally anonymous last-chance platform.
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="normal 400 20px/1.5 --fontFamily-googleManrope"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Let's cut to the chase: we all have that one person in the college. That person who looked just{" "}
					<Em>
						so good
					</Em>
					{" "}in their Christmas Gala fit, fresh from the tailor. That person who fills out the Schwarzman Polo in{" "}
					<Strong>
						all
					</Strong>
					{" "}the right ways. That person for whom we tickle everyone one of their WeChat messages, even the unfunny overheards. Don't you wish you could share just how you feel?
					<br />
					<br />
					Us too. And now you can.
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-purple">
			<Override slot="SectionContent" color="--light" />
			<Text margin="0px 0px 50px 0px" font="--headline1" sm-font="normal 800 48px/1.2 &quot;Manrope&quot;, sans-serif">
				How is Works
			</Text>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaCheck}
						margin="0px 0px 22px 0px"
						color="--light"
						size="36px"
					/>
					<Text margin="0px 0px 11px 0px" color="--light" font="--headline3" lg-text-align="left">
						Complete
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="normal 600 17px/1.5 --fontFamily-googleManrope"
						text-align="center"
						flex="1 0 auto"
					>
						The anonymous interest form. Simply enter your Schwarzman email and check off each cutie in the college that you like.{" "}
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaExchangeAlt}
						margin="0px 0px 22px 0px"
						color="--light"
						size="36px"
					/>
					<Text margin="0px 0px 11px 0px" color="--light" font="--headline3" lg-text-align="left">
						Match
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="normal 600 17px/1.5 &quot;Manrope&quot;, sans-serif"
						text-align="center"
						flex="1 0 auto"
					>
						The site will then automatically and discretely match match you with every person you marked that also marked you. This process is anonymized and cannot be seen from the backend.
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaHeart}
						margin="0px 0px 22px 0px"
						color="--light"
						size="36px"
					/>
					<Text margin="0px 0px 11px 0px" color="--light" font="--headline3" lg-text-align="left">
						Love
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="normal 600 17px/1.5 &quot;Manrope&quot;, sans-serif"
						text-align="center"
						flex="1 0 auto"
					>
						An email will be automatically sent out with all of your matches. What you do with that information is yours alone.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h2" font="--headline1" margin="0 0 8px 0">
							FAQs
						</Text>
						<Text as="p" font="--lead" margin="0" color="--greyD2" />
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="66.66%" md-width="100%">
					<Box display="flex" flex-direction="row" flex-wrap="wrap">
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--headline3" margin="12px 0">
									Why is this a thing?
								</Text>
								<Text as="p" font="--base" margin="12px 0" color="--greyD2">
									Two reasons: 1) We love love! 2) We love chaos even more &gt;:)
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--headline3" margin="12px 0">
									Is this actually anonymous? Can you prove it?
								</Text>
							</Box>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								Yes, the matching is anonymous. Anyone interested is welcome to reach out and ask to see the code behind it all.
							</Text>
						</Box>
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--headline3" margin="12px 0">
									What happens when I get a match?
								</Text>
								<Text as="p" font="--base" margin="12px 0" color="--greyD2">
									That's for you to decide. Will you confess your undying admiration? Awkwardly pretend like it never happened? Who knows, but isn't it just too tempting just to know?
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--headline3" margin="12px 0">
									I have a suggestion/
									<br />
									complaint.
								</Text>
								<Text as="p" font="--base" margin="12px 0" color="--greyD2">
									That's great! We kindly suggest you make your own project then. You're also welcome to send them{" "}
									<Link href="https://www.google.com.hk/search?q=trash+can&tbm=isch&ved=2ahUKEwjIqvqUoZ_4AhXQw4sBHRwDByAQ2-cCegQIABAA&oq=trash+can&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIICAAQgAQQsQMyBQgAEIAEMggIABCABBCxAzIHCAAQsQMQQzILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyBQgAEIAEOgQIABBDOggIABCxAxCDAVDTCFjYEmDoFGgAcAB4AIABeIgB5AeSAQM2LjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=VlKhYsinF9CHr7wPnIacgAI&bih=789&biw=1440">
										here
									</Link>
									.
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
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
					href="/index1"
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