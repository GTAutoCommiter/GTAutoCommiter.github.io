import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { groupByProjects, projectTypeMap, projects } from '@site/data/projects';
import MyLayout from '@site/src/theme/MyLayout';
import clsx from 'clsx';
import ShowcaseCard from './_components/ShowcaseCard';
import styles from './styles.module.css';

const TITLE = '项目';
const DESCRIPTION = '学而无用，不如学而用之。这里是我在技术领域中努力实践和应用的最佳证明。';

type ProjectState = {
  scrollTopPosition: number
  focusedElementId: string | undefined
}

export function prepareUserState(): ProjectState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    }
  }

  return undefined
}

const ShowcaseHeader = () => {
  return (
    <section className="text--center">
      <h2>{TITLE}</h2>
      <p>{DESCRIPTION}</p>
    </section>
  )
}

const ShowcaseCards = () => {
  if (projects.length === 0) {
    return (
      <section className='margin-top--lg margin-bottom--xl'>
        <div className='container padding-vert--md text--center'>
          <h2>No result</h2>
        </div>
      </section>
    )
  }

  return (
    <section className='margin-top--lg margin-bottom--xl'>
      <>
        <div className='container margin-top--lg'>
          <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
          </div>
          {Object.entries(groupByProjects).map(([key, value]) => {
            return (
              <div key={key}>
                <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
                  <h3>{projectTypeMap[key]}</h3>
                </div>
                <ul className={styles.showcaseList}>
                  {value.map(project => (
                    <ShowcaseCard
                      key={project.title}
                      project={project}
                    />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </>
    </section>
  )
}

const Showcase = () => {
  return (
    <MyLayout
      title={TITLE}
      description={DESCRIPTION}
      maxWidth={1280}
    >
      <main className='margin-vert--lg'>
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </MyLayout>
  )
}

export default Showcase;