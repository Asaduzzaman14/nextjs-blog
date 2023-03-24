import Format from '../layout/format'
import Sectionone from '../components/sectionone'
import Section from '../components/section2'
import Popular from '../components/popular'


export default function Home() {
  return (
    <div>
      <Format>
        <main>
          <Sectionone></Sectionone>
          <Section ></Section>
          <Popular />
        </main>
      </Format>
    </div>
  )
}

