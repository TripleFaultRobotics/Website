<script>
  import Card from "$lib/components/Card.svelte";
</script>

<svelte:head><title>Triple Fault | Our Team</title></svelte:head>

<h1 class="mb-8 text-6xl font-extrabold text-center">Our Team</h1>
<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[72rem] lg:mx-auto"
>
  <div class="grid gap-2 h-fit">
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Sergey Lutsenko</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">Lead Coach</h4>
      <p class="text-center"></p>
    </Card>
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Kirill Lutsenko</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Head of Engineering / Team Captain
      </h4>
      <p class="text-center">
        Kirill Lutsenko is an 12th grader passionate about engineering and
        programming. He has 3 years of experience with robotics, and enjoys
        music and programming.
      </p>
    </Card>
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Ryan Yuan</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Head of 3D Modeling
      </h4>
      <p class="text-center">
        Ryan is an 12th grader at CCA. He has previously done two years of
        robotics and is excited to continue pursuing this field here in Triple
        Fault. Outside of robotics, Ryan is involved in his Aerospace Club,
        badminton, volunteering, and research.
      </p>
    </Card>
  </div>
  <div class="grid gap-2 h-fit">
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Sean Kuo</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Head of Design
      </h4>
      <p class="text-center">
        Sean is an 12th grader at CCA and has a passion for robotics. He has two
        years of experience working with robots and enjoys building and
        programming with his teammates. Outside of robotics, he enjoys tutoring
        children, teaching children overseas English.
      </p>
    </Card>
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Sang Park</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Head of Hardware
      </h4>
      <p class="text-center">
        12th Grader
      </p>
    </Card>
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Miles Krawitz</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Head of Mechanical
      </h4>
    </Card>
  </div>
  <div class="grid gap-2 h-fit">
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Aiden Shi</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Head of Software
      </h4>
      <p class="text-center">
        Aiden Shi is an 12th grade developer and designer. He designs websites
        such as this one. Outside of designing and developing systems for
        robotics, he spends a lot of his time with obscure programming languages
        and compilers.
      </p>
    </Card>
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Owen Kwan</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Head of AI/ML
      </h4>
      <p class="text-center">Teemo main</p>
    </Card>
    <Card class="w-full">
      <h3 class="text-xl font-bold text-center">Elena Lutsenko</h3>
      <h4 class="mb-2 font-medium text-center text-stone-400">
        Co-Head of Hardware
      </h4>
    </Card>
  </div>
</div>
