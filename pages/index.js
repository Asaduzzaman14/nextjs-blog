import Format from '../layout/format'
import Sectionone from '../components/sectionone'
import Section from '../components/section2'
import Popular from '../components/popular'
import Buisness from '../components/buisness'


export default function Home() {
  return (
    <div>
      <Format>
        <main>
          <Sectionone></Sectionone>
          <Section ></Section>
          <Popular />
          <Buisness></Buisness>
        </main>
      </Format>
    </div>
  )
}

