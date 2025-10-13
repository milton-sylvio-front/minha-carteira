import { UiBox, UiFlex, UiSkeleton } from '@/components/UI';

export const PageLoading = () => (
  <UiBox>
    <UiSkeleton width="220px" height="37px" />
    <UiFlex alignItems="center" justifyContent="space-between" mb={4} mt={4}>
      <UiSkeleton width="350px" height="40px" />

      <UiBox display="grid" gridGap={2} gridAutoFlow="column">
        <UiSkeleton width="109px" height="40px" />
        <UiSkeleton width="126px" height="40px" />
        <UiSkeleton width="175px" height="40px" />
      </UiBox>
    </UiFlex>

    <table>
      <thead>
        <tr>
          {new Array(7).fill(null).map((i) => (
            <th key={i}>
              <UiSkeleton width="50%" height="20px" />
            </th>
          ))}
        </tr>
      </thead>
    </table>

    <UiBox display="grid" gridGap={2} gridAutoFlow="row">
      {new Array(3).fill(null).map((i) => (
        <UiSkeleton key={i} width="100%" height="46px" />
      ))}
    </UiBox>
  </UiBox>
);
