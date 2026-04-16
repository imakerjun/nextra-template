import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

// TODO: 사이트 메타데이터 수정
export const metadata = {
  title: {
    default: 'My Docs',
    template: '%s | My Docs',
  },
  description: '문서 사이트 설명을 입력하세요.',
}

// TODO: 로고 수정
const logo = (
  <span style={{ fontWeight: 700, fontSize: '0.9375rem', letterSpacing: '-0.01em' }}>
    My Docs
  </span>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar logo={logo}>
              <ThemeSwitch lite className="theme-switch-navbar" />
            </Navbar>
          }
          pageMap={await getPageMap()}
          // TODO: GitHub 저장소 URL로 변경
          docsRepositoryBase="https://github.com/username/repo/tree/main"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          footer={
            <Footer>
              {/* TODO: 저작권 정보 수정 */}
              <span style={{ fontSize: '0.8125rem', color: 'rgb(155, 155, 155)' }}>
                © {new Date().getFullYear()} My Docs
              </span>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
